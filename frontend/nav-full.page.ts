// Use at your own risk.
const a = document.createElement('style');
const htmlElement = document.documentElement;

const wallpaper = 'url("原始壁纸地址")';
const blurredWallpaper = 'url("模糊壁纸地址")';

a.innerHTML = `
:root {
    --hydro-wallpaper: ${wallpaper};
    --hydro-wallpaper-blur: ${blurredWallpaper};

    --glass-color: rgba(255, 255, 255, 0.68);
    --glass-border: rgba(255, 255, 255, 0.35);
}

/*
 * Page background
 */
${htmlElement.dataset.page !== 'user_login' ? `
#panel > .main {
    background-image: var(--hydro-wallpaper);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}
` : ''}

/*
 * Main glass sections
 *
 * The blurred wallpaper uses exactly the same background geometry
 * as the original wallpaper, so it visually aligns with the page.
 */
body .slideout-panel .main .row .section {
    background:
        linear-gradient(
            var(--glass-color),
            var(--glass-color)
        ),
        var(--hydro-wallpaper-blur);

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    border: 1px solid var(--glass-border);

    /*
     * No expensive realtime backdrop blur.
     * saturation can be baked into the blurred image instead.
     */
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
}

/*
 * Navigation
 */
.nav {
    background:
        linear-gradient(
            rgba(255, 255, 255, 0.78),
            rgba(255, 255, 255, 0.78)
        ),
        var(--hydro-wallpaper-blur);

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    backdrop-filter: none;
    -webkit-backdrop-filter: none;
}

/*
 * Table header
 */
thead {
    background:
        linear-gradient(
            rgba(255, 255, 255, 0.78),
            rgba(255, 255, 255, 0.78)
        ),
        var(--hydro-wallpaper-blur);

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    backdrop-filter: none;
    -webkit-backdrop-filter: none;
}

/*
 * Remove alternating table backgrounds and borders
 */
.data-table tr:nth-child(2n),
.data-table tr {
    background: none;
}

.data-table tr {
    border: none;
}

.page--problem_main .col--ac-tried,
.page--problem_category .col--ac-tried {
    border: none;
}
`;

document.head.append(a);