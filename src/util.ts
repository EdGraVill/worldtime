export const mergeToLeftWithKey = <T, K extends keyof T>(left: T[], right: T[], key: K): T[] => {
  const draft: { [key: string]: T } = left.reduce((prev, curr) => ({
    ...prev,
    [curr[key] as unknown as string]: curr,
  }), {});

  right.forEach((element) => {
    draft[element[key] as unknown as string] = element;
  });

  return Object.values(draft);
};

export const PRESERVATION_SUFIX = '@preservation';

export const preserve = <T>(key: string, value: T): T => {
  localStorage.setItem(`${PRESERVATION_SUFIX}/${key}`, JSON.stringify({ value }));

  return value;
};

export function recover<T>(key: string, placeholder: undefined): T | undefined;
export function recover<T>(key: string, placeholder: T): T;
export function recover<T>(key: string, placeholder: T | undefined): T | undefined {
  const item = localStorage.getItem(`${PRESERVATION_SUFIX}/${key}`);
  const { value } = JSON.parse(item || '{ "value": null }');

  return value || placeholder || undefined;
};

export const mapArrayWithKey = <T, K extends keyof T>(array: T[], key: K): { [unique: string]: T } =>
  array.reduce((prev, curr) => ({
    ...prev,
    [curr[key] as unknown as string]: curr,
  }), {});

export const remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

export const syncScrolls = () => {
  const elements = document.getElementsByClassName('worldtime-graph');

  Array.from(elements).forEach((element, ix, arr) => {
    element.addEventListener('scroll', (event) => {
      arr.forEach((ne, nix) => {
        if (nix !== ix) {
          ne.scrollLeft = (event.currentTarget as HTMLInputElement).scrollLeft;
        }
      });
    });
  });
}

export const getUTCNow = () => new Date(new Date().toUTCString());
