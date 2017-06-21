import React from 'react';
import PropTypes from 'prop-types';
import WixComponent from '../WixComponent';
import PopoverMenu from '../PopoverMenu/PopoverMenu';
import PopoverMenuItem from '../PopoverMenuItem/PopoverMenuItem';
import {PenOutline} from '../Icons/dist';

const defaultLanguages = ['en', 'es'];

export default class LanguagePicker extends WixComponent {
  onSelect(locale) {
    const {baseUrl, i18n} = this.props;
    i18n({locale, baseUrl});
  }

  render() {
    const {dataHook, availableLanguages} = this.props;
    return (
      <PopoverMenu dataHook={dataHook} placement="bottom">
        {
          availableLanguages.map(lang => (
          <PopoverMenuItem
            icon={<PenOutline />}
            onClick={() => this.onSelect()}
            text="Edit"
          />
        ))
        }
      </PopoverMenu>
    );
  }
}

LanguagePicker.defaultProps = {
  availableLanguages: defaultLanguages
}

LanguagePicker.propTypes = {
  dataHook: PropTypes.string,
  availableLanguages: PropTypes.arrayOf(PropTypes.string),
  i18n: PropTypes.func.isRequired
};
