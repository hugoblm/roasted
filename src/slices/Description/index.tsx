import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Description`.
 */
export type DescriptionProps = SliceComponentProps<Content.DescriptionSlice>;

/**
 * Component for "Description" Slices.
 */
const Description = ({ slice }: DescriptionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for description (variation: {slice.variation})
      Slices
    </section>
  );
};

export default Description;
