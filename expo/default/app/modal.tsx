import * as React from 'react';
import { View } from 'react-native';
import { Text } from '~/components/ui/text';
import { Button } from '~/components/ui/button';
import { router } from 'expo-router';

export default function Modal() {
  return (
    <View className='flex-1 justify-center items-center gap-5 p-6 bg-secondary/30'>
      <View className='w-full max-w-sm p-8 rounded-2xl bg-card'>
        <Text className='text-3xl font-bold text-center mb-6'>
          Welcome to the Magic! ✨
        </Text>
        <Text className='text-lg text-center text-muted-foreground mb-8'>
          This is your presentation view. Ready to create something amazing?
        </Text>
        <Button
          onPress={() => router.back()}
          className='w-full'
        >
          <Text>Go Back</Text>
        </Button>
      </View>
    </View>
  );
}
