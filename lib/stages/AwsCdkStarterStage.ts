import { Construct, Stage, StageProps } from '@aws-cdk/core'
import { AwsCdkStarterStack } from '../stacks'

export class AwsCdkStarterStage extends Stage {
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props)

    new AwsCdkStarterStack(this, 'AwsCdkStarter')
  }
}
