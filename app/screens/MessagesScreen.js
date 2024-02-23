import { useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const initialMessages = [
  {
    id: 1,
    title: 'Title1',
    description: `Description1`,
    image: require('../assets/mosh.jpg')
  },
  {
    id: 2,
    title: 'Title2',
    description: 'Description2',
    image: require('../assets/mosh.jpg')
  },
  {
    id: 3,
    title: 'Title3',
    description: 'Description3',
    image: require('../assets/jacket.jpg')
  }
]

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);
  
  const handleDelete = message => {
    // Delete the message from messages array
    setMessages(messages.filter(m => m.id !== message.id));
    
  }
  
  return (
    <Screen>
      <FlatList 
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({ item }) => 
          <ListItem 
            title={item.title}
            subTitle={item.description}
            image={item.image}
            showChevrons={true}
            onPress={() => console.log("PRESSED.", item)}
            renderRightActions={() =>
              <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
          />}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages(initialMessages)
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;