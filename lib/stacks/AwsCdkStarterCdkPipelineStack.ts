import { Repository } from '@aws-cdk/aws-codecommit'
import { Artifact } from '@aws-cdk/aws-codepipeline'
import { CodeCommitSourceAction } from '@aws-cdk/aws-codepipeline-actions'
import { Vpc } from '@aws-cdk/aws-ec2'
import { Construct, Stack, StackProps } from '@aws-cdk/core'
import { CdkPipeline, SimpleSynthAction } from '@aws-cdk/pipelines'
import { AwsCdkStarterStage } from '../stages'

export class AwsCdkStarterCdkPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props)

    const sourceRepo = new Repository(this, 'Repository', { repositoryName: 'aws-cdk-starter' })
    const sourceArtifact = new Artifact()
    const cloudAssemblyArtifact = new Artifact()

    const pipeline = new CdkPipeline(this, 'Pipeline', {
      pipelineName: 'AwsCdkStarter',
      cloudAssemblyArtifact,
      sourceAction: new CodeCommitSourceAction({
        actionName: 'CodeCommitSource',
        repository: sourceRepo,
        output: sourceArtifact,
      }),
      synthAction: SimpleSynthAction.standardYarnSynth({
        sourceArtifact,
        cloudAssemblyArtifact,
        vpc: new Vpc(this, 'YarnSynthVpc'),
        buildCommand: 'yarn build',
      }),
    })

    pipeline.addApplicationStage(new AwsCdkStarterStage(this, 'AwsCdkStarter'))
  }
}
