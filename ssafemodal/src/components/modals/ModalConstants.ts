export const MODAL_TEXT = {
  LOGIN: {
    title: "닉네임을 입력하세요.",
    subtitle: "닉네임은 최소 4글자 이상이어야 합니다.",
  },
  SURVEY: {
    title: "새로운 설문지를 작성합니다.",
    subtitle: "새로운 설문지를 작성하기 위한 설정입니다.",
  },
};

export type ModalType = keyof typeof MODAL_TEXT;
