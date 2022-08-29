import classNames from 'classnames';

export type Colors =
  | 'default'
  | 'primary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'lime'
  | 'green'
  | 'emerald'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose';

const colors = ['primary',
  'default',
  'success',
  'danger',
  'warning',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose'];
export function isColor(color: string | Colors): color is Colors {
  return colors.includes(color);
}

export function bgColorClass(color: Colors): string {
  if (color === 'default') {
    return 'dark:bg-zinc-800 bg-zinc-200 text-zinc-600 dark:text-zinc-200';
  }
  return classNames(
    `bg-${color}-600`, // bg-primary-600 bg-default-600 bg-success-600 bg-danger-600 bg-warning-600 bg-slate-600 bg-gray-600 bg-zinc-600 bg-neutral-600 bg-stone-600 bg-red-600 bg-orange-600 bg-amber-600 bg-yellow-600 bg-lime-600 bg-green-600 bg-emerald-600 bg-teal-600 bg-cyan-600 bg-sky-600 bg-blue-600 bg-indigo-600 bg-violet-600 bg-purple-600 bg-fuchsia-600 bg-pink-600 bg-rose-600
    'text-white',
  );
}

export function hoverBgColorClass(color: Colors): string {
  if (color === 'default') {
    return 'hover:bg-zinc-300 hover:dark:bg-zinc-600';
  }
  return classNames(
    `hover:bg-${color}-500`, // hover:bg-primary-500 hover:bg-default-500 hover:bg-success-500 hover:bg-danger-500 hover:bg-warning-500 hover:bg-slate-500 hover:bg-gray-500 hover:bg-zinc-500 hover:bg-neutral-500 hover:bg-stone-500 hover:bg-red-500 hover:bg-orange-500 hover:bg-amber-500 hover:bg-yellow-500 hover:bg-lime-500 hover:bg-green-500 hover:bg-emerald-500 hover:bg-teal-500 hover:bg-cyan-500 hover:bg-sky-500 hover:bg-blue-500 hover:bg-indigo-500 hover:bg-violet-500 hover:bg-purple-500 hover:bg-fuchsia-500 hover:bg-pink-500 hover:bg-rose-500
    `dark:hover:bg-${color}-700`, // dark:hover:bg-primary-700 dark:hover:bg-default-700 dark:hover:bg-success-700 dark:hover:bg-danger-700 dark:hover:bg-warning-700 dark:hover:bg-slate-700 dark:hover:bg-gray-700 dark:hover:bg-zinc-700 dark:hover:bg-neutral-700 dark:hover:bg-stone-700 dark:hover:bg-red-700 dark:hover:bg-orange-700 dark:hover:bg-amber-700 dark:hover:bg-yellow-700 dark:hover:bg-lime-700 dark:hover:bg-green-700 dark:hover:bg-emerald-700 dark:hover:bg-teal-700 dark:hover:bg-cyan-700 dark:hover:bg-sky-700 dark:hover:bg-blue-700 dark:hover:bg-indigo-700 dark:hover:bg-violet-700 dark:hover:bg-purple-700 dark:hover:bg-fuchsia-700 dark:hover:bg-pink-700 dark:hover:bg-rose-700
  );
}

export function textColorClass(color: Colors): string {
  if (color === 'default') {
    return 'dark:text-zinc-400 text-zinc-600';
  }
  return classNames(
    `text-${color}-600 text-white`, // text-primary-600 text-default-600 text-success-600 text-danger-600 text-warning-600 text-slate-600 text-gray-600 text-zinc-600 text-neutral-600 text-stone-600 text-red-600 text-orange-600 text-amber-600 text-yellow-600 text-lime-600 text-green-600 text-emerald-600 text-teal-600 text-cyan-600 text-sky-600 text-blue-600 text-indigo-600 text-violet-600 text-purple-600 text-fuchsia-600 text-pink-600 text-rose-600
    `dark:text-${color}-500`, // dark:text-default-500 dark:text-primary-500 dark:text-success-500 dark:text-danger-500 dark:text-warning-500 dark:text-slate-500 dark:text-gray-500 dark:text-zinc-400 dark:text-neutral-500 dark:text-stone-500 dark:text-red-500 dark:text-orange-500 dark:text-amber-500 dark:text-yellow-500 dark:text-lime-500 dark:text-green-500 dark:text-emerald-500 dark:text-teal-500 dark:text-cyan-500 dark:text-sky-500 dark:text-blue-500 dark:text-indigo-500 dark:text-violet-500 dark:text-purple-500 dark:text-fuchsia-500 dark:text-pink-500 dark:text-rose-500
  );
}

export function borderColorClass(color: Colors): string {
  if (color === 'default') {
    return 'border-zinc-300 dark:border-zinc-600';
  }
  return classNames(
    `border-${color}-500`, // border-default-500 border-primary-500 border-success-500 border-danger-500 border-warning-500 border-slate-500 border-gray-500 border-zinc-500 border-neutral-500 border-stone-500 border-red-500 border-orange-500 border-amber-500 border-yellow-500 border-lime-500 border-green-500 border-emerald-500 border-teal-500 border-cyan-500 border-sky-500 border-blue-500 border-indigo-500 border-violet-500 border-purple-500 border-fuchsia-500 border-pink-500 border-rose-500`)
    `dark:border-${color}-700`, // dark:border-default-700 dark:border-primary-700 dark:border-success-700 dark:border-danger-700 dark:border-warning-700 dark:border-slate-700 dark:border-gray-700 dark:border-zinc-700 dark:border-neutral-700 dark:border-stone-700 dark:border-red-700 dark:border-orange-700 dark:border-amber-700 dark:border-yellow-700 dark:border-lime-700 dark:border-green-700 dark:border-emerald-700 dark:border-teal-700 dark:border-cyan-700 dark:border-sky-700 dark:border-blue-700 dark:border-indigo-700 dark:border-violet-700 dark:border-purple-700 dark:border-fuchsia-700 dark:border-pink-700 dark:border-rose-700
    'border',
  );
}

export function colorClass({
  bg,
  text,
  hoverable,
  outline,
  ring = 'primary',
  border,
}: {
  bg?: Colors;
  text?: Colors;
  hoverable?: Colors;
  border?: Colors;
  outline?: Colors;
  ring?: Colors;
}) {
  const bgCls = classNames(
    `dark:bg-${bg}-500`, // dark:bg-default-500 dark:bg-primary-500 dark:bg-success-500 dark:bg-danger-500 dark:bg-warning-500 dark:bg-slate-500 dark:bg-gray-500 dark:bg-zinc-500 dark:bg-neutral-500 dark:bg-stone-500 dark:bg-red-500 dark:bg-orange-500 dark:bg-amber-500 dark:bg-yellow-500 dark:bg-lime-500 dark:bg-green-500 dark:bg-emerald-500 dark:bg-teal-500 dark:bg-cyan-500 dark:bg-sky-500 dark:bg-blue-500 dark:bg-indigo-500 dark:bg-violet-500 dark:bg-purple-500 dark:bg-fuchsia-500 dark:bg-pink-500 dark:bg-rose-500
    { [`bg-${bg}-500`]: bg !== 'default' }, // bg-primary-500 bg-success-500 bg-danger-500 bg-warning-500 bg-slate-500 bg-gray-500 bg-zinc-500 bg-neutral-500 bg-stone-500 bg-red-500 bg-orange-500 bg-amber-500 bg-yellow-500 bg-lime-500 bg-green-500 bg-emerald-500 bg-teal-500 bg-cyan-500 bg-sky-500 bg-blue-500 bg-indigo-500 bg-violet-500 bg-purple-500 bg-fuchsia-500 bg-pink-500 bg-rose-500
    { [`bg-${bg}-50 !text-black dark:!text-default-200`]: bg === 'default' }, // bg-default-50 !text-black
  );
  const textCls = classNames(
    `dark:text-${text}-600`, // dark:text-default-600 dark:text-primary-600 dark:text-success-600 dark:text-danger-600 dark:text-warning-600 dark:text-slate-600 dark:text-gray-600 dark:text-zinc-400 dark:text-neutral-600 dark:text-stone-600 dark:text-red-600 dark:text-orange-600 dark:text-amber-600 dark:text-yellow-600 dark:text-lime-600 dark:text-green-600 dark:text-emerald-600 dark:text-teal-600 dark:text-cyan-600 dark:text-sky-600 dark:text-blue-600 dark:text-indigo-600 dark:text-violet-600 dark:text-purple-600 dark:text-fuchsia-600 dark:text-pink-600 dark:text-rose-600
    { [`text-${text}-600`]: text !== 'default' }, // text-default-600 text-primary-600 text-success-600 text-danger-600 text-warning-600 text-slate-600 text-gray-600 text-zinc-600 text-neutral-600 text-stone-600 text-red-600 text-orange-600 text-amber-600 text-yellow-600 text-lime-600 text-green-600 text-emerald-600 text-teal-600 text-cyan-600 text-sky-600 text-blue-600 text-indigo-600 text-violet-600 text-purple-600 text-fuchsia-600 text-pink-600 text-rose-600
  );
  const hoverableCls = classNames(
    `dark:hover:bg-${hoverable}-700`, // dark:hover:bg-default-700 dark:hover:bg-primary-700 dark:hover:bg-success-700 dark:hover:bg-danger-700 dark:hover:bg-warning-700 dark:hover:bg-slate-700 dark:hover:bg-gray-700 dark:hover:bg-zinc-700 dark:hover:bg-neutral-700 dark:hover:bg-stone-700 dark:hover:bg-red-700 dark:hover:bg-orange-700 dark:hover:bg-amber-700 dark:hover:bg-yellow-700 dark:hover:bg-lime-700 dark:hover:bg-green-700 dark:hover:bg-emerald-700 dark:hover:bg-teal-700 dark:hover:bg-cyan-700 dark:hover:bg-sky-700 dark:hover:bg-blue-700 dark:hover:bg-indigo-700 dark:hover:bg-violet-700 dark:hover:bg-purple-700 dark:hover:bg-fuchsia-700 dark:hover:bg-pink-700 dark:hover:bg-rose-700
    `dark:ring-${hoverable}-500`, // ring-primary-500 ring-success-500 ring-danger-500 ring-warning-500 ring-slate-500 ring-gray-500 ring-zinc-500 ring-neutral-500 ring-stone-500 ring-red-500 ring-orange-500 ring-amber-500 ring-yellow-500 ring-lime-500 ring-green-500 ring-emerald-500 ring-teal-500 ring-cyan-500 ring-sky-500 ring-blue-500 ring-indigo-500 ring-violet-500 ring-purple-500 ring-fuchsia-500 ring-pink-500 ring-rose-500
    { [`hover:bg-${hoverable}-600`]: hoverable !== 'default' }, // hover:bg-primary-600 hover:bg-success-600 hover:bg-danger-600 hover:bg-warning-600 hover:bg-slate-600 hover:bg-gray-600 hover:bg-zinc-600 hover:bg-neutral-600 hover:bg-stone-600 hover:bg-red-600 hover:bg-orange-600 hover:bg-amber-600 hover:bg-yellow-600 hover:bg-lime-600 hover:bg-green-600 hover:bg-emerald-600 hover:bg-teal-600 hover:bg-cyan-600 hover:bg-sky-600 hover:bg-blue-600 hover:bg-indigo-600 hover:bg-violet-600 hover:bg-purple-600 hover:bg-fuchsia-600 hover:bg-pink-600 hover:bg-rose-600
    { [`hover:bg-${hoverable}-200`]: hoverable === 'default' }, // hover:bg-default-200
    `hover:text-${hoverable}-600`, // hover:text-primary-600 hover:text-success-600 hover:text-danger-600 hover:text-warning-600 hover:text-slate-600 hover:text-gray-600 hover:text-zinc-600 hover:text-neutral-600 hover:text-stone-600 hover:text-red-600 hover:text-orange-600 hover:text-amber-600 hover:text-yellow-600 hover:text-lime-600 hover:text-green-600 hover:text-emerald-600 hover:text-teal-600 hover:text-cyan-600 hover:text-sky-600 hover:text-blue-600 hover:text-indigo-600 hover:text-violet-600 hover:text-purple-600 hover:text-fuchsia-600 hover:text-pink-600 hover:text-rose-600
    `hover:dark:text-${hoverable}-600`, // hover:text-primary-600 hover:text-success-600 hover:text-danger-600 hover:text-warning-600 hover:text-slate-600 hover:text-gray-600 hover:text-zinc-600 hover:text-neutral-600 hover:text-stone-600 hover:text-red-600 hover:text-orange-600 hover:text-amber-600 hover:text-yellow-600 hover:text-lime-600 hover:text-green-600 hover:text-emerald-600 hover:text-teal-600 hover:text-cyan-600 hover:text-sky-600 hover:text-blue-600 hover:text-indigo-600 hover:text-violet-600 hover:text-purple-600 hover:text-fuchsia-600 hover:text-pink-600 hover:text-rose-600
  );
  const ringCls = classNames(
    { [`ring-${ring}-600`]: ring !== 'default' }, // ring-primary-600 ring-success-600 ring-danger-600 ring-warning-600 ring-slate-600 ring-gray-600 ring-zinc-600 ring-neutral-600 ring-stone-600 ring-red-600 ring-orange-600 ring-amber-600 ring-yellow-600 ring-lime-600 ring-green-600 ring-emerald-600 ring-teal-600 ring-cyan-600 ring-sky-600 ring-blue-600 ring-indigo-600 ring-violet-600 ring-purple-600 ring-fuchsia-600 ring-pink-600 ring-rose-600
    { [`ring-${ring}-300`]: ring === 'default' }, // ring-default-300
  );
  const borderCls = classNames(
    `dark:border-${border}-700`, // dark:border-default-700 dark:border-primary-700 dark:border-success-700 dark:border-danger-700 dark:border-warning-700 dark:border-slate-700 dark:border-gray-700 dark:border-zinc-700 dark:border-neutral-700 dark:border-stone-700 dark:border-red-700 dark:border-orange-700 dark:border-amber-700 dark:border-yellow-700 dark:border-lime-700 dark:border-green-700 dark:border-emerald-700 dark:border-teal-700 dark:border-cyan-700 dark:border-sky-700 dark:border-blue-700 dark:border-indigo-700 dark:border-violet-700 dark:border-purple-700 dark:border-fuchsia-700 dark:border-pink-700 dark:border-rose-700
    { [`border-${border}-600`]: border !== 'default' }, /// border-primary-600 border-success-600 border-danger-600 border-warning-600 border-slate-600 border-gray-600 border-zinc-600 border-neutral-600 border-stone-600 border-red-600 border-orange-600 border-amber-600 border-yellow-600 border-lime-600 border-green-600 border-emerald-600 border-teal-600 border-cyan-600 border-sky-600 border-blue-600 border-indigo-600 border-violet-600 border-purple-600 border-fuchsia-600 border-pink-600 border-rose-600
    { [`border-${border}-200`]: border === 'default' }, // border-default-200
  );

  const outlineCls = classNames(
    'outline',
    { [`dark:outline-${outline}-700`]: outline !== 'default' }, // dark:outline-primary-700 dark:outline-success-700 dark:outline-danger-700 dark:outline-warning-700 dark:outline-slate-700 dark:outline-gray-700 dark:outline-zinc-700 dark:outline-neutral-700 dark:outline-stone-700 dark:outline-red-700 dark:outline-orange-700 dark:outline-amber-700 dark:outline-yellow-700 dark:outline-lime-700 dark:outline-green-700 dark:outline-emerald-700 dark:outline-teal-700 dark:outline-cyan-700 dark:outline-sky-700 dark:outline-blue-700 dark:outline-indigo-700 dark:outline-violet-700 dark:outline-purple-700 dark:outline-fuchsia-700 dark:outline-pink-700 dark:outline-rose-700
    { [`outline-${outline}-600`]: outline !== 'default' }, // outline-primary-600 outline-success-600 outline-danger-600 outline-warning-600 outline-slate-600 outline-gray-600 outline-zinc-600 outline-neutral-600 outline-stone-600 outline-red-600 outline-orange-600 outline-amber-600 outline-yellow-600 outline-lime-600 outline-green-600 outline-emerald-600 outline-teal-600 outline-cyan-600 outline-sky-600 outline-blue-600 outline-indigo-600 outline-violet-600 outline-purple-600 outline-fuchsia-600 outline-pink-600 outline-rose-600
    { [`outline-${border}-200`]: outline === 'default' }, // outline-default-200
  );
  return classNames({
    'border-transparent': !border,
    [bgCls]: bg,
    [borderCls]: border,
    [hoverableCls]: hoverable,
    [outlineCls]: outline,
    [textCls]: text,
    [ringCls]: ring,
  });
}
