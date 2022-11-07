export interface ISidebarRow {
    id: string;
    title: string;
    route: string;
    linkText: string;
    icon: any;
    iconColor: string;
  }
  
export type SidebarRowProps = {
    sidebarRow: ISidebarRow;
    toggleSidebar?: () => void;
};