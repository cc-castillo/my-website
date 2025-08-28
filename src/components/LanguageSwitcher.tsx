import React, { useState } from 'react';
import { ToggleButton } from '@once-ui-system/core';

const languages = [
    { code: 'en', label: 'EN'}, 
    { code: 'es', label: 'ES'},
];

export const LanguageSwitcher: React.FC = () => {
    const [lang, setLang] = useState <'en' | 'es'>('en');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLang(e.target.value as 'en' | 'es');
    };

    const toggleLanguage = () => {
        setLang(prev => (prev === 'en' ? 'es' : 'en'));
    };

    const nextLang = lang === 'en' ? 'es' : 'en';
    const nextLangLabel = languages.find(l => l.code === nextLang)?.label;

    return (
        <ToggleButton
            prefixIcon={nextLang}
            label={nextLangLabel}
            onClick={toggleLanguage}
            aria-label={`Switch to ${nextLangLabel}`}
        >
            {nextLangLabel}
        </ToggleButton>
    )};
