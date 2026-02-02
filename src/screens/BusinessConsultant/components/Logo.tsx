export const Logo = (): JSX.Element => {
    return (
        <div className="flex items-center gap-3">
            <div className="relative w-7 h-7 rounded-md bg-gradient-to-br from-amber-500 via-yellow-500 to-slate-600" />
            <div className="bg-gradient-to-r from-amber-400 to-slate-500 bg-clip-text text-transparent font-bold text-2xl tracking-tighter leading-tight">
                Thorne Advisory
            </div>
        </div>
    );
};
