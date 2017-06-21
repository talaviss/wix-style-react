import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../WixComponent';
import {Languages} from '../Icons/dist';
import ButtonWithOptions from '../ButtonWithOptions/ButtonWithOptions';
import Button from '../Button/Button';

export default class LanguagePicker extends WixComponent {
  onSelect(locale) {
    const {baseUrl, i18n} = this.props;
    i18n({locale, baseUrl});
  }

  render() {
    const {dataHook, theme, children} = this.props;
    return (
      <ButtonWithOptions
        dataHook={dataHook}
        onSelect={option => this.onSelect(option.value)}
        >
        <Button type="button" height="medium" theme={theme}>
          <Languages size="12px"/>
        </Button>
        {children}
      </ButtonWithOptions>
    );
  }
}

LanguagePicker.defaultProps = {
  theme: 'icon-greybackground'
};

LanguagePicker.propTypes = {
  dataHook: PropTypes.string,
  availableLanguages: PropTypes.arrayOf(PropTypes.string),
  i18n: PropTypes.func.isRequired,
  baseUrl: PropTypes.string.isRequired,
  theme: PropTypes.string,
  children: PropTypes.any
};

LanguagePicker.Option = ({languageKey, children}) => (
  <ButtonWithOptions.Option id={languageKey}>{children}</ButtonWithOptions.Option>
);

LanguagePicker.Option.propTypes = {
  languageKey: PropTypes.string.isRequired,
  children: PropTypes.string
};
