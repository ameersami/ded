export interface TabGroupProps {
  tabs: Array<String>;
  selectedTab: String;
  onChange: (prevTab: String, newTab: String) => any | Function;
}