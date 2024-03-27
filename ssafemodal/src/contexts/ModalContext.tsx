import { createContext } from "react";
import { IModal } from "../components/modals/Modal";

export interface IModalState {
  Component: IModal;
  isOpen: boolean;
}

//현재 open된 modal들을 나타냄
export const ModalsStateContext = createContext<IModalState[]>([]);

//modal을 열고 닫는 함수
export const ModalsDispatchContext = createContext({
  open: () => {},
  close: () => {},
});

// import {
//   ComponentType,
//   useMemo,
//   useState,
//   createContext,
//   PropsWithChildren,
//   HTMLAttributes,
// } from "react";

// export type ModalsState = Array<{
//   Component: ModalComponent;
//   props?: ModalProps;
//   isOpen: boolean;
// }>;
// export type ModalComponent = ComponentType;
// export type ModalProps = Record<string, any> | HTMLAttributes<HTMLDivElement>;

// interface ModalsDispatch {
//   open: (Component: ModalComponent, props: ModalProps) => void;
//   close: (Component: ModalComponent) => void;
// }

// export const ModalsStateContext = createContext<ModalsState>([]);

// export const ModalsDispatchContext = createContext<ModalsDispatch>({
//   open: () => {},
//   close: () => {},
// });

// const ModalsProvider = ({ children }: PropsWithChildren) => {
//   const [openedModals, setOpenedModals] = useState<ModalsState>([]);

//   const open = (Component: ModalComponent, props: ModalProps) => {
//     setOpenedModals((modals) => {
//       const modalIndex = modals.findIndex(
//         (modal) => modal.Component === Component
//       );
//       if (modalIndex !== -1) {
//         modals[modalIndex].isOpen = true;
//         modals[modalIndex].props = props;
//         return [...modals];
//       }
//       return [...modals, { Component, props, isOpen: true }];
//     });
//   };

//   const close = (Component: ModalComponent) => {
//     setOpenedModals((modals) =>
//       modals.map((modal) =>
//         modal.Component === Component ? { ...modal, isOpen: false } : modal
//       )
//     );
//   };

//   const dispatch = useMemo(() => ({ open, close }), []);

//   return (
//     <ModalsStateContext.Provider value={openedModals}>
//       <ModalsDispatchContext.Provider value={dispatch}>
//         {children}
//       </ModalsDispatchContext.Provider>
//     </ModalsStateContext.Provider>
//   );
// };
// export default ModalsProvider;
