import React from 'react';
import GhostButton from './GhostButton.jsx';
import UnderlinedButton from './UnderlinedButton.jsx';

/**
 * Tab component for rendering tab buttons and tab content.
 * @param {Object} props
 * @param {Array} props.tabs - Array of tab objects { value, label, startElement, endElement }.
 * @param {string} props.value - Currently selected tab value.
 * @param {function} props.onChange - Callback when tab is changed.
 * @param {React.ReactNode[]} props.children - Tab content, one per tab.
 */
const Tab = ({ tabs, value, onChange, children }) => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          gap: 0,
          marginBottom: 24,
          borderBottom: '1.5px solid #eee',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        {tabs.map((tab, idx) =>
          value === tab.value ? (
            <UnderlinedButton
              key={tab.value}
              selected
              startElement={tab.startElement}
              endElement={tab.endElement}
              style={{ minWidth: 120, flex: '1 1 120px', textAlign: 'center' }}
              onClick={() => onChange(tab.value)}
            >
              {tab.label}
            </UnderlinedButton>
          ) : (
            <GhostButton
              key={tab.value}
              startElement={tab.startElement}
              endElement={tab.endElement}
              style={{ minWidth: 120, flex: '1 1 120px', textAlign: 'center' }}
              onClick={() => onChange(tab.value)}
            >
              {tab.label}
            </GhostButton>
          )
        )}
      </div>
      <div>
        {children[tabs.findIndex(t => t.value === value)]}
      </div>
    </div>
  );
};

export default Tab;
