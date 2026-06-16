if (localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('theme-toggle');

    toggleButton.addEventListener('click', () => {
    // Toggle the 'dark' class on the HTML tag
    document.documentElement.classList.toggle('dark');
    
    // Optional: Save preference to localStorage
    if (document.documentElement.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
    });
});