import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Menu } from 'react-native-paper';

const Dropdown = ({ options, onSelect }) => {
    const [visible, setVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (option) => {
        setSelectedOption(option);
        onSelect(option);
        setVisible(false);
    };

    return (
        <View>
            <Menu
                visible={visible}
                onDismiss={() => setVisible(false)}
                anchor={
                    <Button onPress={() => setVisible(true)}>
                        {selectedOption ? selectedOption.label : 'Select an option'}
                    </Button>
                }
            >
                {options.map((option) => (
                    <Menu.Item
                        key={option.value}
                        onPress={() => handleSelect(option)}
                        title={option.label}
                    />
                ))}
            </Menu>
        </View>
    );
};

export default Dropdown;
