export interface ModalInterface {
  label: string;
  isShow: boolean;
  onHide: () => void;
  onClose: () => void;
  onClick: () => void;
  children: React.JSX.Element;
}
