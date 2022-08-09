import classNames from "classnames";

export type Colors =
  | "primary"
  | "success"
  | "danger"
  | "warning"
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";
export function colorClass({
  bg,
  text,
  hoverable,
  border,
}: {
  bg?: Colors;
  text?: Colors;
  hoverable?: Colors;
  border?: Colors;
}) {
  const bgCls = classNames(
    `dark:bg-${bg}-800`, // dark:bg-primary-800 dark:bg-success-800 dark:bg-danger-800 dark:bg-warning-800 dark:bg-slate-800 dark:bg-gray-800 dark:bg-zinc-800 dark:bg-neutral-800 dark:bg-stone-800 dark:bg-red-800 dark:bg-orange-800 dark:bg-amber-800 dark:bg-yellow-800 dark:bg-lime-800 dark:bg-green-800 dark:bg-emerald-800 dark:bg-teal-800 dark:bg-cyan-800 dark:bg-sky-800 dark:bg-blue-800 dark:bg-indigo-800 dark:bg-violet-800 dark:bg-purple-800 dark:bg-fuchsia-800 dark:bg-pink-800 dark:bg-rose-800
    `bg-${bg}-500`, // bg-primary-500 bg-success-500 bg-danger-500 bg-warning-500 bg-slate-500 bg-gray-500 bg-zinc-500 bg-neutral-500 bg-stone-500 bg-red-500 bg-orange-500 bg-amber-500 bg-yellow-500 bg-lime-500 bg-green-500 bg-emerald-500 bg-teal-500 bg-cyan-500 bg-sky-500 bg-blue-500 bg-indigo-500 bg-violet-500 bg-purple-500 bg-fuchsia-500 bg-pink-500 bg-rose-500
    `dark:outline-${bg}-800`, // dark:outline-primary-800 dark:outline-success-800 dark:outline-danger-800 dark:outline-warning-800 dark:outline-slate-800 dark:outline-gray-800 dark:outline-zinc-800 dark:outline-neutral-800 dark:outline-stone-800 dark:outline-red-800 dark:outline-orange-800 dark:outline-amber-800 dark:outline-yellow-800 dark:outline-lime-800 dark:outline-green-800 dark:outline-emerald-800 dark:outline-teal-800 dark:outline-cyan-800 dark:outline-sky-800 dark:outline-blue-800 dark:outline-indigo-800 dark:outline-violet-800 dark:outline-purple-800 dark:outline-fuchsia-800 dark:outline-pink-800 dark:outline-rose-800
    `outline-${bg}-600` // outline-primary-600 outline-success-600 outline-danger-600 outline-warning-600 outline-slate-600 outline-gray-600 outline-zinc-600 outline-neutral-600 outline-stone-600 outline-red-600 outline-orange-600 outline-amber-600 outline-yellow-600 outline-lime-600 outline-green-600 outline-emerald-600 outline-teal-600 outline-cyan-600 outline-sky-600 outline-blue-600 outline-indigo-600 outline-violet-600 outline-purple-600 outline-fuchsia-600 outline-pink-600 outline-rose-600
  );
  const textCls = classNames(
    `dark:text-${text}-600`, // dark:text-primary-600 dark:text-success-600 dark:text-danger-600 dark:text-warning-600 dark:text-slate-600 dark:text-gray-600 dark:text-zinc-600 dark:text-neutral-600 dark:text-stone-600 dark:text-red-600 dark:text-orange-600 dark:text-amber-600 dark:text-yellow-600 dark:text-lime-600 dark:text-green-600 dark:text-emerald-600 dark:text-teal-600 dark:text-cyan-600 dark:text-sky-600 dark:text-blue-600 dark:text-indigo-600 dark:text-violet-600 dark:text-purple-600 dark:text-fuchsia-600 dark:text-pink-600 dark:text-rose-600
    `text-${text}-600` // text-primary-600 text-success-600 text-danger-600 text-warning-600 text-slate-600 text-gray-600 text-zinc-600 text-neutral-600 text-stone-600 text-red-600 text-orange-600 text-amber-600 text-yellow-600 text-lime-600 text-green-600 text-emerald-600 text-teal-600 text-cyan-600 text-sky-600 text-blue-600 text-indigo-600 text-violet-600 text-purple-600 text-fuchsia-600 text-pink-600 text-rose-600
  );
  const hoverableCls = classNames(
    `hover:!bg-${hoverable}-700` // hover:!bg-primary-700 hover:!bg-success-700 hover:!bg-danger-700 hover:!bg-warning-700 hover:!bg-slate-700 hover:!bg-gray-700 hover:!bg-zinc-700 hover:!bg-neutral-700 hover:!bg-stone-700 hover:!bg-red-700 hover:!bg-orange-700 hover:!bg-amber-700 hover:!bg-yellow-700 hover:!bg-lime-700 hover:!bg-green-700 hover:!bg-emerald-700 hover:!bg-teal-700 hover:!bg-cyan-700 hover:!bg-sky-700 hover:!bg-blue-700 hover:!bg-indigo-700 hover:!bg-violet-700 hover:!bg-purple-700 hover:!bg-fuchsia-700 hover:!bg-pink-700 hover:!bg-rose-700
  );
  const borderCls = classNames(`border border-${border}-700`); // border-primary-700 border-success-700 border-danger-700 border-warning-700 border-slate-700 border-gray-700 border-zinc-700 border-neutral-700 border-stone-700 border-red-700 border-orange-700 border-amber-700 border-yellow-700 border-lime-700 border-green-700 border-emerald-700 border-teal-700 border-cyan-700 border-sky-700 border-blue-700 border-indigo-700 border-violet-700 border-purple-700 border-fuchsia-700 border-pink-700 border-rose-700
  return classNames({
    [bgCls]: bg,
    [hoverableCls]: hoverable,
    [textCls]: text,
    [borderCls]: border,
    "border-transparent": !border,
  });
}
