import * as React from 'react';
import { View } from 'react-native';
import { Button } from '~/components/ui/button';
import { Text } from '~/components/ui/text';
import { router } from 'expo-router';

export default function Screen() {
  return (
    <View className='flex-1 justify-center items-center gap-8 p-6 bg-secondary/30'>
      
      <Text className='text-2xl font-bold text-center text-primary tracking-tighter'>
        Welcome to QlurAI.
      </Text>
      <Text className='text-5xl font-bold text-center text-foreground tracking-tighter'>
        Let's build something magical.
      </Text>
      
      <Button
        onPress={() => router.push('/modal')}
        className='px-8 py-4 rounded-full'
        size='lg'
      >
        <Text className='text-lg font-semibold'>Get Started</Text>
      </Button>
    </View>
  );
}
