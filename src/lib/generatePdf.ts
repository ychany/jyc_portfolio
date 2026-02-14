export async function generatePdf() {
  // 다크모드 여부 확인 및 임시 라이트모드 전환
  const html = document.documentElement;
  const wasDark = html.classList.contains("dark");
  if (wasDark) {
    html.classList.remove("dark");
    html.style.colorScheme = "light";
  }

  // 인쇄용 클래스 추가
  document.body.classList.add("printing");

  // 스타일 적용 대기
  await new Promise((resolve) => setTimeout(resolve, 300));

  window.print();

  // 원래 상태 복원
  document.body.classList.remove("printing");
  if (wasDark) {
    html.classList.add("dark");
    html.style.colorScheme = "dark";
  }
}
