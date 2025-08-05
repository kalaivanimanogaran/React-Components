import React from 'react';
import PropTypes from 'prop-types';
import { Box, Tabs, Tab } from '@mui/material';

function TabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index} role="tabpanel">
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

const VTabs = ({
  orientation = 'horizontal',
  variant = 'standard',
  scrollButtons = 'auto',
  allowScrollButtonsMobile = false,
  tabs = [],
  initialIndex = 0,
  selectionFollowsFocus = false,
  textColor = 'primary',
  indicatorColor = 'primary',
}) => {
  const [value, setValue] = React.useState(initialIndex);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        display: orientation === 'vertical' ? 'flex' : 'block',
        borderRight: orientation === 'vertical' ? 1 : 0,
        borderBottom: orientation === 'horizontal' ? 1 : 0,
        borderColor: 'divider',
      }}
    >
      <Tabs
        orientation={orientation}
        variant={variant}
        scrollButtons={variant === 'scrollable' ? scrollButtons : undefined}
        allowScrollButtonsMobile={allowScrollButtonsMobile}
        value={value}
        onChange={handleChange}
        selectionFollowsFocus={selectionFollowsFocus}
        textColor={textColor}
        indicatorColor={indicatorColor}
        aria-label="custom tabs"
        sx={{ minWidth: orientation === 'vertical' ? 120 : 'auto' }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            icon={tab.icon}
            iconPosition={tab.iconPosition || 'top'}
            wrapped={tab.wrapped}
            disabled={tab.disabled}
            {...(tab.ariaLabel ? { 'aria-label': tab.ariaLabel } : {})}
          />
        ))}
      </Tabs>

      {tabs.map((tab, index) => (
        <TabPanel key={index} value={value} index={index}>
          {tab.content}
        </TabPanel>
      ))}
    </Box>
  );
};

VTabs.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']),
  variant: PropTypes.oneOf(['standard', 'scrollable', 'fullWidth']),
  scrollButtons: PropTypes.oneOf(['auto', true, false]),
  allowScrollButtonsMobile: PropTypes.bool,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.element,
      iconPosition: PropTypes.oneOf(['top', 'bottom', 'start', 'end']),
      wrapped: PropTypes.bool,
      disabled: PropTypes.bool,
      content: PropTypes.node,
      ariaLabel: PropTypes.string,
    })
  ).isRequired,
  initialIndex: PropTypes.number,
  selectionFollowsFocus: PropTypes.bool,
  textColor: PropTypes.string,
  indicatorColor: PropTypes.string,
};

export default VTabs;
