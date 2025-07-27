function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.overlay');
    const isOpen = sidebar.classList.contains('show');

    if (isOpen) {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
        document.body.style.overflow = '';
    } else {
        sidebar.classList.add('show');
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}

// Add event listener after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Also handle escape key to close sidebar
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const sidebar = document.querySelector('.sidebar');
            if (sidebar.classList.contains('show')) {
                toggleSidebar();
            }
        }
    });

    // Close sidebar when clicking links (for smooth UX)
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('startup-card')) {
            const sidebar = document.querySelector('.sidebar');
            if (window.innerWidth <= 1024 && sidebar.classList.contains('show')) {
                // Keep sidebar open when clicking cards since they're part of the content
                // Only close if specifically clicking hamburger or overlay
            }
        }
    });
});