import React, {Suspense} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import FeedList from '@/components/feed/FeedList';
import Indicator from '@/components/common/Indicator';

export default function FeedHomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Suspense fallback={<Indicator />}>
        <FeedList />
      </Suspense>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
