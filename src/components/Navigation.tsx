import { NavLink } from "@/components/NavLink";
import { BookOpen, Circle, Square, BookText, Languages } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <NavLink
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-primary hover:text-primary-light transition-colors"
          >
            <BookOpen className="h-6 w-6" />
            <span className="hidden sm:inline">Kana Master</span>
            <span className="sm:hidden">KM</span>
          </NavLink>

          <div className="flex items-center gap-1">
            <NavLink
              to="/hiragana"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg text-foreground hover:bg-accent transition-all duration-300 text-sm"
              activeClassName="bg-primary text-primary-foreground hover:bg-primary-light"
            >
              <Circle className="h-4 w-4" />
              <span className="hidden sm:inline">Hiragana</span>
            </NavLink>

            <NavLink
              to="/katakana"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg text-foreground hover:bg-accent transition-all duration-300 text-sm"
              activeClassName="bg-primary text-primary-foreground hover:bg-primary-light"
            >
              <Square className="h-4 w-4" />
              <span className="hidden sm:inline">Katakana</span>
            </NavLink>

            <NavLink
              to="/kanji"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg text-foreground hover:bg-accent transition-all duration-300 text-sm"
              activeClassName="bg-primary text-primary-foreground hover:bg-primary-light"
            >
              <Languages className="h-4 w-4" />
              <span className="hidden sm:inline">Kanji</span>
            </NavLink>

            <NavLink
              to="/stories"
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 rounded-lg text-foreground hover:bg-accent transition-all duration-300 text-sm"
              activeClassName="bg-primary text-primary-foreground hover:bg-primary-light"
            >
              <BookText className="h-4 w-4" />
              <span className="hidden sm:inline">Stories</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
