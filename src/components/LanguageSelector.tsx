import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

type Language = "uz" | "en" | "ru" | "tr" | "fr";

const languages = [
  { code: "uz" as Language, name: "O'zbek", flag: "🇺🇿" },
  { code: "en" as Language, name: "English", flag: "🇬🇧" },
  { code: "ru" as Language, name: "Русский", flag: "🇷🇺" },
  { code: "tr" as Language, name: "Türkçe", flag: "🇹🇷" },
  { code: "fr" as Language, name: "Français", flag: "🇫🇷" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const currentLang = (i18n.language || "uz") as Language;

  const selectedLanguage = languages.find((lang) => lang.code === currentLang);

  const handleLanguageChange = (langCode: Language) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('language', langCode);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="rounded-full border-2 border-primary/30 hover:border-primary hover:bg-accent transition-smooth shadow-soft px-4"
        >
          <Globe className="w-4 h-4 mr-2 text-primary" />
          <span className="font-body text-sm font-medium">{selectedLanguage?.flag} {selectedLanguage?.code.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48 rounded-xl bg-card border-border shadow-elegant p-2"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className="rounded-lg cursor-pointer transition-smooth hover:bg-accent px-3 py-2.5"
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-3">
                <span className="text-xl">{lang.flag}</span>
                <span className="font-body text-sm font-medium">{lang.name}</span>
              </div>
              {currentLang === lang.code && (
                <div className="w-2 h-2 rounded-full bg-primary animate-scale-in" />
              )}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
