# Flagit 🇮🇳

Flagit is the smallest npm package to display flags (~50kb) from about 242
supported countries that can be used as a react component.

### [View the live demo](https://525sb.csb.app/)

## How to use:

`import Country from "flagit";`

Then use the component by passing appropriate props as described below:

### Example:

`<Country countryShort="IN" size="md" />`

OR

`<Country countryShort="IN" customWidth="12px" customHeight="8px" />`

Props:

| Props        | Values                                                                                    | Description                                                                    |
| ------------ | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| countryShort | as per https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements | Pass country code in this prop eg: `IN, US, AU`                                |
| size         | sm, md, lg, xl                                                                            | sm=18w x11h<br /> md=27wx17h<br /> lg=42wx27h<br /> xl=60wx37h<br /> in pixels |
| customWidth  | eg: `12px`                                                                                | Will override the size prop styling                                            |
| customHeight | eg: `8px`                                                                                 | Will override the size prop styling                                            |

## Note:

- Both customWidth and customHeight is mandatory to be used together while
  declaring custom flag size in the ratio of `3:2` e.g: 12x8, 24x16, 48x32
- Default size is set to `sm`
