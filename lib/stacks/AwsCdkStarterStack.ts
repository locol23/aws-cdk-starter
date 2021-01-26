import { Topic } from '@aws-cdk/aws-sns'
import { SqsSubscription } from '@aws-cdk/aws-sns-subscriptions'
import { Queue } from '@aws-cdk/aws-sqs'
import { Construct, Duration, Stack, StackProps } from '@aws-cdk/core'

export class AwsCdkStarterStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const queue = new Queue(this, 'AwsCdkStarterQueue', {
      visibilityTimeout: Duration.seconds(300),
    })

    const topic = new Topic(this, 'AwsCdkStarterTopic')

    topic.addSubscription(new SqsSubscription(queue))
  }
}
