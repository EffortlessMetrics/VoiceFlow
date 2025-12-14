import { NavLink } from "react-router-dom";
import { Mic, Home, History, Settings, Sparkles, Github, Heart, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

const GITHUB_REPO_URL = "https://github.com/infiniV/VoiceFlow";

const navItems = [
  { to: "/dashboard", icon: Home, label: "Home" },
  { to: "/dashboard/history", icon: History, label: "History" },
  { to: "/dashboard/settings", icon: Settings, label: "Settings" },
];

interface SidebarProps {
  onNavigate?: () => void;
}

export function Sidebar({ onNavigate }: SidebarProps) {
  return (
    <aside className="w-64 h-screen bg-sidebar flex flex-col border-r border-sidebar-border shadow-2xl z-20 relative overflow-hidden">
       {/* Background Blur blob for Sidebar */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-20%] w-[150px] h-[150px] bg-primary/10 blur-[50px] rounded-full" />
       </div>

      {/* Logo Area */}
      <div className="p-6 pb-8 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 ring-1 ring-white/10">
            <Mic className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-lg text-sidebar-foreground tracking-tight leading-none bg-clip-text text-transparent bg-gradient-to-br from-sidebar-foreground to-sidebar-foreground/70">
              VoiceFlow
            </h1>
            <p className="text-xs text-sidebar-foreground/50 font-medium mt-0.5 tracking-wide">
              AI Dictation
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 space-y-2 relative z-10">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/dashboard"}
            onClick={onNavigate}
            className={({ isActive }) =>
              cn(
                "group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300",
                isActive
                  ? "bg-primary/15 text-primary shadow-sm border border-primary/10 backdrop-blur-sm" 
                  : "text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent/50 hover:pl-5 border border-transparent"
              )
            }
          >
            {({ isActive }) => (
              <>
                <item.icon
                  className={cn(
                    "h-4 w-4 transition-colors",
                    isActive ? "text-primary" : "text-sidebar-foreground/60 group-hover:text-primary"
                  )}
                />
                <span className="flex-1">{item.label}</span>
                {isActive && (
                  <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_currentColor] animate-pulse" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Promo / Footer */}
      <div className="p-4 mt-auto relative z-10 space-y-4">
        
        {/* Pro Tip Card */}
        <div className="glass-strong rounded-2xl p-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 bg-primary/10 rounded-full blur-2xl -mr-4 -mt-4 transition-all group-hover:bg-primary/20" />
            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                   <div className="p-1.5 rounded-lg bg-primary/20 text-primary">
                      <Sparkles className="w-3.5 h-3.5" />
                   </div>
                   <span className="text-xs font-bold text-sidebar-foreground/80 uppercase tracking-wide">Pro Tip</span>
                </div>
                <p className="text-xs text-sidebar-foreground/60 leading-relaxed">
                    Press <span className="text-primary font-bold font-mono bg-primary/10 px-1.5 py-0.5 rounded border border-primary/20">Ctrl+Win</span> to start listening instantly.
                </p>
            </div>
        </div>

        {/* Community Links */}
        <div className="space-y-1">
            <a
              href={`${GITHUB_REPO_URL}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 w-full rounded-xl text-xs font-medium text-sidebar-foreground/70 hover:text-primary hover:bg-sidebar-accent/50 transition-all border border-transparent hover:border-sidebar-border/50"
            >
              <MessageSquare className="h-4 w-4 opacity-70" />
              Report Issue
            </a>
            
            <a
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 w-full rounded-xl text-xs font-medium text-sidebar-foreground/70 hover:text-primary hover:bg-sidebar-accent/50 transition-all border border-transparent hover:border-sidebar-border/50"
            >
               <Github className="h-4 w-4 opacity-70" />
               Star on GitHub
            </a>

            <div className="pt-2 px-4 flex items-center justify-between text-[10px] text-sidebar-foreground/30 font-mono">
                <span>v1.0.0</span>
                <span className="flex items-center gap-1"><Heart className="w-2 h-2 text-red-500/50" /> Open Source</span>
            </div>
        </div>
      </div>
    </aside>
  );
}
