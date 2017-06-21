# LanguagePicker component

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| dataHook | string | - | - | Specifies a data-hook for tests |
| children | nodes | - | + | Specify the languages list to render |
| i18n | func | - | + | The function you pass to the I18nextProvider in your production code |
| baseUrl | string | - | + | baseUrl param for the i18n translation |
| onSelect | func | - | - | Callback to call on language selection |
| theme | string | icon-greybackground | - | Theme of the icon's background |


# LanguagePicker.Option

## Properties

| propName | propType | defaultValue | isRequired | description |
|----------|----------|--------------|------------|-------------|
| languageKey | string | - | + | language key such as 'en' that suits the translation file name |
| children | string | - | + | The language name to display in the dropdown's options |
