// LUXCO image assets — uploaded via lovable-assets CDN
import img0 from "../assets/img_0.png.asset.json";
import img3 from "../assets/img_3.jpeg.asset.json";
import img4 from "../assets/img_4.jpeg.asset.json";
import img5 from "../assets/img_5.jpeg.asset.json";
import img6 from "../assets/img_6.jpeg.asset.json";
import img7 from "../assets/img_7.jpeg.asset.json";
import img8 from "../assets/img_8.jpeg.asset.json";
import img9 from "../assets/img_9.jpeg.asset.json";
import img10 from "../assets/img_10.jpeg.asset.json";
import img11 from "../assets/img_11.jpeg.asset.json";
import img12 from "../assets/img_12.jpeg.asset.json";
import img13 from "../assets/img_13.jpeg.asset.json";
import img14 from "../assets/img_14.jpeg.asset.json";
import img15 from "../assets/img_15.jpeg.asset.json";
import img16 from "../assets/img_16.jpeg.asset.json";
import img17 from "../assets/img_17.jpeg.asset.json";
import img18 from "../assets/img_18.jpeg.asset.json";
import img19 from "../assets/img_19.jpeg.asset.json";
import img20 from "../assets/img_20.jpeg.asset.json";
import img21 from "../assets/img_21.jpeg.asset.json";
import img22 from "../assets/img_22.jpeg.asset.json";
import img23 from "../assets/img_23.jpeg.asset.json";
import img24 from "../assets/img_24.jpeg.asset.json";
import img25 from "../assets/img_25.jpeg.asset.json";
import img26 from "../assets/img_26.jpeg.asset.json";
import img27 from "../assets/img_27.jpeg.asset.json";
import img28 from "../assets/img_28.jpeg.asset.json";
import img29 from "../assets/img_29.jpeg.asset.json";
import img30 from "../assets/img_30.jpeg.asset.json";
import img31 from "../assets/img_31.jpeg.asset.json";
import img32 from "../assets/img_32.jpeg.asset.json";
import img33 from "../assets/img_33.jpeg.asset.json";
import img34 from "../assets/img_34.jpeg.asset.json";
import img35 from "../assets/img_35.jpeg.asset.json";
import img36 from "../assets/img_36.jpeg.asset.json";
import img37 from "../assets/img_37.png.asset.json";

const assetMap: Record<string, { url: string }> = {
  "img_0.png": img0,
  "img_3.jpeg": img3,
  "img_4.jpeg": img4,
  "img_5.jpeg": img5,
  "img_6.jpeg": img6,
  "img_7.jpeg": img7,
  "img_8.jpeg": img8,
  "img_9.jpeg": img9,
  "img_10.jpeg": img10,
  "img_11.jpeg": img11,
  "img_12.jpeg": img12,
  "img_13.jpeg": img13,
  "img_14.jpeg": img14,
  "img_15.jpeg": img15,
  "img_16.jpeg": img16,
  "img_17.jpeg": img17,
  "img_18.jpeg": img18,
  "img_19.jpeg": img19,
  "img_20.jpeg": img20,
  "img_21.jpeg": img21,
  "img_22.jpeg": img22,
  "img_23.jpeg": img23,
  "img_24.jpeg": img24,
  "img_25.jpeg": img25,
  "img_26.jpeg": img26,
  "img_27.jpeg": img27,
  "img_28.jpeg": img28,
  "img_29.jpeg": img29,
  "img_30.jpeg": img30,
  "img_31.jpeg": img31,
  "img_32.jpeg": img32,
  "img_33.jpeg": img33,
  "img_34.jpeg": img34,
  "img_35.jpeg": img35,
  "img_36.jpeg": img36,
  "img_37.png": img37,
};

export function getAssetUrl(filename: string): string {
  return assetMap[filename]?.url ?? "";
}

export const logoUrl = img0.url;
export const heroSlides = [img9.url, img10.url, img11.url, img12.url];
export const aboutImage = img13.url;
