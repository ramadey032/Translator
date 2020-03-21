import React from 'react';
import LanguageContext from '../contexts/LanguageContext';


class LanguageSelector extends React.Component {
    static contextType = LanguageContext;
    render() {
        return (
            <div>
                Select a language:
                <i className="us flag" onClick={() => this.context.onLanguageChange('english')} />
                <i className="in flag" onClick={() => this.context.onLanguageChange('hindi')} />
            </div>
        );
    };
}

export default LanguageSelector;