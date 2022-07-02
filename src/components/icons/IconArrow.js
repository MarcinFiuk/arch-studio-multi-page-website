function IconArrow({ stroke }) {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' width='26' height='20'>
            <g
                fill='none'
                fillRule='evenodd'
                stroke={stroke || 'var(--white)'}
                strokeWidth='2'
            >
                <path d='M15 1l9 9-9 9M0 10h24' />
            </g>
        </svg>
    );
}

export default IconArrow;
