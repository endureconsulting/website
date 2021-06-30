# endureconsulting.net

## Using cover images

1. Download saturated image ([example](https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=60&sat=-100)) and save to `/public` folder

   ```
   https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=60&sat=-100
   ```

1. Load image with `next/image` component

   ```js
   import Image from "next/image";

   import importedImage from "@/public/imported-image.jpg";

   // optionally specify the "objectPosition"
   const Component = () => (
     <Image
       src={importedImage}
       alt="image description"
       layout="fill"
       objectFit="cover"
       objectPosition="bottom"
     />
   );
   ```

### Image credits

- [About cover image](https://unsplash.com/photos/A4iL43vunlY) by [
  Matt Howard](https://unsplash.com/@thematthoward)
- [IT Engineering Services cover image](https://unsplash.com/photos/pgSkeh0yl8o) by [Christopher Robin Ebbinghaus](https://unsplash.com/@cebbbinghaus)
- [Copy Editing/Proofreading Services cover image](https://unsplash.com/photos/iGLLtLINSkw) by [Aryan Dhiman](https://unsplash.com/@mylifeasaryan_)
- [Learning/Education Services cover image](https://unsplash.com/photos/R5S4OQpG0lE) by [
  Casey Fyfe](https://unsplash.com/@caseyfyfe)
