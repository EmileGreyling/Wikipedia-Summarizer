import { useState, useEffect } from 'react';
import { Alert, ActivityIndicator } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import {
  View, 
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Stack } from 'expo-router';

import { COLORS, icons } from '../../constants';
import styles from './home.style';
import useFetch from '../../hook/useFetch';
import CopyButton from '../copyButton/CopyButton';

const Home = () => {
  const [topic, setTopic] = useState('');
  const [summary, setSummary] = useState('');
  const { data, loading, error, fetchData } = useFetch();

  // Get the summary when the generate summary button is pressed
  const handleTopicSubmit = async () => {
    try {
      fetchData('https://en.wikipedia.org/w/api.php', {
        format: 'json',
        action: 'query',
        prop: 'extracts',
        exlimit: 'max',
        explaintext: 'true',
        exintro: 'true',
        titles: topic,
        redirects: '',
      })
    } catch (error) {
      console.log(error);
    }
    
  };

  // Set the summary state once the data is fetched
  useEffect(() => {
    if (data) {
      setSummary(data);
      setTopic('');
    }
  }, [data])

  const copyToClipboard = async (text) => {
    await Clipboard.setStringAsync(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setTopic(text)}
        value={topic}
        placeholder="Enter a topic"
        placeholderTextColor={'#A9A9A9'}
      />
      <TouchableOpacity
        disabled={topic.trim() ? false : true}
        style={topic.trim() ? styles.button : styles.disabledButton}
        onPress={handleTopicSubmit}
      >
        <Text style={styles.buttonText}>Generate Summary</Text>
      </TouchableOpacity>
      <View>
        { !loading && summary && (
          <>
            <View style={styles.topOptions}>
              <CopyButton 
                iconUrl={icons.clipboard} 
                dimension={'70%'} 
                handlePress={() => {
                  copyToClipboard(summary);
                  Alert.alert('Success', 'Summary Copied To Clipboard', [
                    {text: 'OK'}
                  ])
                }}
              />
            </View>
            <View style={styles.summaryContainer}>
              <Text style={styles.summaryText}>{summary}</Text>
            </View>
          </>
          )
        }
        { loading && <ActivityIndicator size="large" /> } 
      </View>
        
    </View>
  );
};

export default Home;
