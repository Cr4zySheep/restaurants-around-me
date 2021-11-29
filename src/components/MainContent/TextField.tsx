/** @jsxRuntime classic */
/** @jsx jsx */
import { useEffect, useState } from 'react';
import { jsx } from '@emotion/react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';

/**
 * Non-functional TextField inspired by Material UI TextField.
 */
export default function TextField({
  name,
  label,
  value,
}: {
  name: string;
  label: string;
  value: string;
}): EmotionJSX.Element {
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(Boolean(value));
  }, [value]);

  return (
    <div
      css={theme => ({
        position: 'relative',
        height: 56,
        backgroundColor: '#f5f5f5',
        borderRadius: '4px 4px 0 0',
        transition: 'background-color 500ms',
        ':hover': {
          backgroundColor: '#ececec',
        },
        ':focus-within': {
          backgroundColor: '#ececec',
        },

        input: {
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          border: '1px solid transparent',
          borderBottomColor: 'rgba(0, 0, 0, 0.42)',
          transition: 'border 500ms',
          caretColor: 'transparent',
          fontSize: '1rem',
          padding: '20px 16px 6px',
        },
        'input:focus': {
          outline: 'none',
          borderBottomColor: theme.colors.secondary,
        },

        label: {
          display: 'block',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
          left: 16,
          color: 'rgba(0, 0, 0, 0.5)',
          transformOrigin: 'left top',
          userSelect: 'none',
          transition:
            'transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1), top 500ms',
        },
        '> input:focus + label, input.isValid + label': {
          transform: 'translateY(-100%) scale(0.75)',
        },
        '> input:focus + label': {
          color: theme.colors.secondary,
        },
      })}
    >
      <input
        type='text'
        id={name}
        required
        className={isValid ? 'isValid' : ''}
        onBlur={event => {
          if (event.target.value) {
            setIsValid(true);
          } else {
            setIsValid(false);
          }
        }}
        value={value}
        readOnly
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
}
