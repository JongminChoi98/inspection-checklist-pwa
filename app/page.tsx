import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.screen}>
      <section className={styles.card}>
        <h1 className={styles.title}>로그인</h1>
        <p className={styles.description}>검사 체크리스트 앱에 접속하세요.</p>

        <form className={styles.form}>
          <label className={styles.label} htmlFor="userId">
            유저 아이디
          </label>
          <input
            className={styles.input}
            id="userId"
            name="userId"
            type="text"
            autoComplete="username"
            placeholder="아이디를 입력하세요"
            required
          />

          <label className={styles.label} htmlFor="password">
            패스워드
          </label>
          <input
            className={styles.input}
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="비밀번호를 입력하세요"
            required
          />

          <button className={styles.button} type="submit">
            로그인
          </button>
        </form>
      </section>
    </main>
  );
}
