function About() {
  return (
    <>
        <h1 className="text-4xl font-bold mb-4" id="about">About Me</h1>
        <p className="text-lg mb-4">
            My name is Shaurya Sharma, and I am an advanced programmer and game developer.
        </p>
        <a style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }} href="https://github.com/shaurya-sharma-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <img src="icons/GitHub_Invertocat_Black.svg" width="30" alt="GitHub Logo" className="dark:hidden" />
            <img src="icons/GitHub_Invertocat_White.svg" width="30" alt="GitHub Logo" className="hidden dark:block" />
            @shaurya-sharma-dev
        </a>
    </>
  )
}

export default About;