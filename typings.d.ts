declare module 'react-native-ico-new-year' {
    import { ReactNode } from 'react';

    type iconNames = 'new-years-eve' |
      'christmas-tree' |
      'bells' |
      'santa-claus' |
      'candelabra' |
      'star' |
      'music-sheet' |
      'shooting-star' |
      'snow-globe' |
      'snowflake' |
      'lantern' |
      'shopping-bag' |
      'lollipop' |
      'snowflake-1' |
      'sleigh' |
      'orange' |
      'moustache' |
      'midnight' |
      'margarita' |
      'christmas-card' |
      'fortune-cookie' |
      'mittens' |
      'bauble' |
      'christmas-day' |
      'santa-claus-1' |
      'christmas-sock' |
      'lantern-1' |
      'star-1' |
      'bird' |
      'gift' |
      'angel' |
      'christmas-card-1' |
      'mistletoe' |
      'cocktail' |
      'chimney' |
      'confetti' |
      'deer' |
      'new-year' |
      'garland' |
      'chat' |
      'window' |
      'jingle-bell' |
      'stars' |
      'champagne' |
      'list' |
      'bauble-1' |
      'candle' |
      'confetti-1' |
      'scroll' |
      'pattern';

    interface IconProps {
      name: iconNames;
      color: string;
      size: number;
    }

    const Icon: (props: IconProps) => ReactNode;

    export { iconNames };
    export default Icon;
}

