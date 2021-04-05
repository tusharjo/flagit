# Flagit 🇮🇳

Flagit is the smallest npm package to display flags from about 242 supported
countries that can be used as a react component.

### [View the live demo](https://525sb.csb.app/)

## How to use:

`import Country from "flagit";`

Then use the component by passing appropriate props as described below:

### Example:

`<Country countryShort="IN" size="md" />`

OR

`<Country countryShort="IN" size="28" />`

Props:

| Props        | Values                                                                                    | Description                                                                                              |
| ------------ | ----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| countryShort | as per https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements | Pass country code in this prop eg: `IN, US, AU`                                                          |
| size         | sm, md, lg, xl, xxl <br/><b>OR</b><br/> Any size between 16 to 64 pixels                  | sm=16w x 16h<br /> md=24w x 24h<br /> lg=32w x 32h<br /> xl=48w x 48h<br /> xxl=64w x 64h<br />in pixels |

## Note:

- Default size is set to `sm` OR `16`
- Removed customWidth and customHeight props, as the width and height are in
  proportion
