import responsiveImage from "../assets/images/features/desktop/responsive.svg";
import noLimitImage from "../assets/images/features/desktop/no-limit.svg";
import embedImage from "../assets/images/features/desktop/embed.svg";
import customImage from "../assets/images/features/desktop/custom-domain.svg";
import boostExposureImage from "../assets/images/features/desktop/boost-exposure.svg";
import dragDropImage from "../assets/images/features/desktop/drag-drop.svg";

export const features = [
  {
    id: 1,
    title: "100% responsive",
    description:
      "No matter which device you’re on, you can enjoy a perfect reading experience.",
    image: responsiveImage,
  },
  {
    id: 2,
    title: "No Photo Upload limit",
    description:
      "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
    image: noLimitImage,
  },
  {
    id: 3,
    title: "Embed images",
    description:
      "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. ",
    image: embedImage,
  },
  {
    id: 4,
    title: "Custom Domain",
    description:
      "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    image: customImage,
  },
  {
    id: 5,
    title: "Boost your exposure",
    description:
      "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    image: boostExposureImage,
  },
  {
    id: 6,
    title: "Drag & Drop Image",
    description:
      "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    image: dragDropImage,
  },
];
