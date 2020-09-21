import * as React from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { remSize } from '../util';
import { selectedTimezoneSelector } from './selectors';

const Container = styled.div.attrs<{ amount: number, left: number, diff: number }>(({ diff, left }) => ({
  style: {
    left: left - (diff < 0 ? diff : 0),
  },
}))<{ amount: number, left: number, diff: number }>`
  ${({ amount, diff }) => css`
    align-items: center;
    background-color: #e74c3c33;
    border-bottom: .5rem solid #e74c3c;
    border-left: 1px solid #e74c3c;
    border-radius: .5rem;
    border-right: 1px solid #e74c3c;
    border-top: .5rem solid #e74c3c;
    ${diff < ((-remSize * 2.5) + 2) ? 'border: 0;' : ''}
    cursor: grab;
    display: flex;
    flex-flow: column nowrap;
    height: ${(amount * 6) - 1}rem;
    position: absolute;
    top: -1rem;
    width: calc(2.5rem + ${diff < 0 ? diff : 0}px);

    &:active {
      cursor: grabbing;
    }

    & > span {
      font-size: .6rem;
      margin-bottom: 5.3rem;
    }
  `}
`;

interface Props {
  localTime: Date;
}

const Selector: React.FC<Props> = ({ localTime }) => {
  const [graph, setGraph] = React.useState<HTMLDivElement>(document.getElementsByClassName('worldtime-graph')[0] as HTMLDivElement);
  const list = useSelector(selectedTimezoneSelector);
  
  const initialLeft = React.useMemo(() => graph?.offsetLeft - (remSize / 4) + (localTime.getHours() * remSize * 2) || 0, [graph, localTime]);

  const [left, setLeft] = React.useState(initialLeft);
  const [scrollMove, setScrollMove] = React.useState(0);
  const [lastMovement, setLastMovement] = React.useState(0);
  const [moved, setMoved] = React.useState(0);

  React.useEffect(() => {
    if (!graph) {
      setTimeout(() => {
        setGraph(document.getElementsByClassName('worldtime-graph')[0] as HTMLDivElement);
      }, 10);
    } else {
      const handler = (event: Event) => {
        const container = ((event.currentTarget as HTMLInputElement));

        setScrollMove(container.scrollLeft);
      };

      graph.addEventListener('scroll', handler);

      return () => {
        graph.removeEventListener('scroll', handler);
      }
    }
  }, [graph, initialLeft]);

  React.useEffect(() => {
    setLeft(initialLeft);
  }, [initialLeft]);

  const onMouseDown = React.useCallback((downEvent: React.MouseEvent<HTMLInputElement>) => {
    const startPoint = downEvent.pageX;
    let movement = 0;
    const moveHandler = (event: MouseEvent) => {
      setMoved(event.pageX - startPoint);
      movement = event.pageX - startPoint;
    };
    const upHandler = () => {
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mouseup', upHandler);
      setLastMovement(lastMovement + movement);
      setMoved(0);
    }

    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('mouseup', upHandler);
    window.addEventListener('mouseleave', upHandler);
  }, [lastMovement]);

  React.useEffect(() => {
    if (graph && left !== 0 && (left - graph.offsetLeft + 4 + lastMovement) < 0) {
      setLastMovement(-(left - graph.offsetLeft + 4));
    } if (left !== 0 && lastMovement >= (remSize * 23 * 2) - (left - graph.offsetLeft + 4)) {
      setLastMovement((remSize * 23 * 2) - (left - graph.offsetLeft + 4));
    }
  }, [graph, lastMovement, left]);

  if (left === 0) {
    return null;
  }

  const finalLeft = lastMovement + moved + left - scrollMove;
  const [hours, preMinutes] = ((finalLeft + scrollMove - remSize - 4) / (remSize * 2) - 12).toFixed(2).split('.');

  return (
    <Container
      amount={list.length + 1}
      diff={finalLeft - graph.offsetLeft + 4}
      left={finalLeft}
      onDoubleClick={() => setLastMovement(0)}
      onMouseDown={onMouseDown}
    >
      <span>
        {(Number(hours) / 100).toFixed(2).split('.')[1]}:{((Number(preMinutes) * 60) / 10000).toFixed(2).split('.')[1]}
      </span>
      {/* {list.map(() => (
        <>
          <span>
            {(Number(hours) / 100).toFixed(2).split('.')[1]}:{((Number(preMinutes) * 60) / 10000).toFixed(2).split('.')[1]}
          </span>
        </>
      ))} */}
    </Container>
  );
};

export default Selector;
