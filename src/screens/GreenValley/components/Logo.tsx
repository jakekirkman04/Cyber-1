export const Logo = (): JSX.Element => {
    return (
        <div className="flex items-center gap-3">
            <div className="relative w-7 h-7 rounded-md bg-gradient-to-br from-green-500 via-emerald-500 to-slate-600" />
            <div className="bg-gradient-to-r from-green-400 to-slate-500 bg-clip-text text-transparent font-bold text-2xl tracking-tighter leading-tight">
                Green Valley Digital
            </div>
        </div>
    );
};
