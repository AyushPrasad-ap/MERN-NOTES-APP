import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const THEMES = [
    "light",
    "dark",
    "cyberpunk",
    "luxury",
    "coffee",
    "valentine",
];

const Navbar = ({ theme, setTheme }) => {
    return (
        <header className="bg-base-300 border-b border-base-content/10">
            <div className="mx-auto max-w-6xl p-4">
                <div className="flex items-center justify-between">
                    {/* App title */}
                    <h1 className="text-3xl font-bold text-primary font-mono tracking-tight">
                        Notes App
                    </h1>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        {/* Theme selector */}
                        <select
                            value={theme}
                            onChange={(e) => setTheme(e.target.value)}
                            className="select select-bordered select-sm w-36"
                            aria-label="Select theme"
                        >
                            {THEMES.map((t) => (
                                <option key={t} value={t}>
                                    {t.charAt(0).toUpperCase() + t.slice(1)}
                                </option>
                            ))}
                        </select>

                        {/* New Note button */}
                        <Link to="/create" className="btn btn-primary btn-sm">
                            <PlusIcon className="size-5" />
                            <span>New Note</span>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
