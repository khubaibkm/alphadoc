export default {
  head: (
    <>
      <title>AlphaDocs</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/Logo.svg" type="image/x-icon" />
    </>
  ),
  logo: (
    <span style={{ display: 'flex', alignItems: 'center' }}>
      <img src="/Logo.svg" alt="My Nextra Documentation" width="20" height="20" style={{ marginRight: '8px' }} />
      AlphaSaas Docs
    </span>
  ),
  project: {
    link: 'https://alphasaas.io',
    icon: (
      <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 453 453" width="20" height="20">
        <g id="Component_2_1" data-name="Component 2 1">
          <g>
            <path
              id="Rectangle_11"
              data-name="Rectangle 11"
              d="m260,0h33c88.37,0,160,71.63,160,160h0c0,30.93-25.07,56-56,56h-105c-30.93,0-56-25.07-56-56V24c0-13.25,10.75-24,24-24Z"
              fill="currentColor"
            />
            <path
              id="Rectangle_12"
              data-name="Rectangle 12"
              d="m56,236h104c30.93,0,56,25.07,56,56h0v105c0,30.93-25.07,56-56,56h0C71.63,453,0,381.37,0,293v-1c0-30.93,25.07-56,56-56Z"
              fill="currentColor"
            />
            <rect
              id="Rectangle_13"
              data-name="Rectangle 13"
              x="236"
              y="236"
              width="217"
              height="217"
              rx="80"
              ry="80"
              fill="currentColor"
            />
          </g>
        </g>
      </svg>
    ),
  },
  color: {
    hue: 125,
    saturation: 55,
    lightness: {
      dark: 100,
      light: 45
    }
  },
  footer: {
    content: (
      <span>
      {new Date().getFullYear()} ©{' '}
        <a href="https://alphasaas.io" target="_blank">
          Alphasaas
        </a>
        .
      </span>
    )
  },
  editLink: false,
  feedback: false,
};
