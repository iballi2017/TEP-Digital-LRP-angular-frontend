import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumeracyTestRoutingModule } from './numeracy-test-routing.module';
import { NumberRecognitionOneComponent } from './levels/number-recognition-one/number-recognition-one.component';
import { NumberRecognitionTwoComponent } from './levels/number-recognition-two/number-recognition-two.component';
import { PlaceValueComponent } from './levels/place-value/place-value.component';
import { NumberRecognitionThreeComponent } from './levels/number-recognition-three/number-recognition-three.component';
import { BasicOperationsAdditionComponent } from './levels/basic-operations-addition/basic-operations-addition.component';
import { BasicOperationsSubtractionComponent } from './levels/basic-operations-subtraction/basic-operations-subtraction.component';
import { BasicOperationsMultiplicationComponent } from './levels/basic-operations-multiplication/basic-operations-multiplication.component';
import { BasicOperationsDivisionComponent } from './levels/basic-operations-division/basic-operations-division.component';
import { NumeracyLevelCompletionComponent } from './numeracy-level-completion/numeracy-level-completion.component';
import { NumeracyProgramCompletionComponent } from './numeracy-program-completion/numeracy-program-completion.component';
import { NumeracyStageCompletionComponent } from './numeracy-stage-completion/numeracy-stage-completion.component';
import { SharedModule } from '../shared/shared.module';
import { NumeracyTestComponent } from './numeracy-test.component';
import { NumberRecognitionComponent } from './levels/number-recognition/number-recognition.component';
import { NumberRecognitionOneModule } from './levels/number-recognition-one/number-recognition-one.module';
import { NumberRecognitionTwoModule } from './levels/number-recognition-two/number-recognition-two.module';
import { NumberRecognitionThreeModule } from './levels/number-recognition-three/number-recognition-three.module';
import { PlaceValueModule } from './levels/place-value/place-value.module';
import { BasicOperationsAdditionModule } from './levels/basic-operations-addition/basic-operations-addition.module';
import { BasicOperationsSubtractionModule } from './levels/basic-operations-subtraction/basic-operations-subtraction.module';
import { BasicOperationsMultiplicationModule } from './levels/basic-operations-multiplication/basic-operations-multiplication.module';
import { BasicOperationsDivisionModule } from './levels/basic-operations-division/basic-operations-division.module';

@NgModule({
  declarations: [
    NumeracyTestComponent,
    NumberRecognitionOneComponent,
    NumberRecognitionTwoComponent,
    PlaceValueComponent,
    NumberRecognitionThreeComponent,
    BasicOperationsAdditionComponent,
    BasicOperationsSubtractionComponent,
    BasicOperationsMultiplicationComponent,
    BasicOperationsDivisionComponent,
    NumeracyLevelCompletionComponent,
    NumeracyProgramCompletionComponent,
    NumeracyStageCompletionComponent,
    NumberRecognitionComponent,
  ],
  imports: [
    CommonModule,
    NumeracyTestRoutingModule,
    NumberRecognitionOneModule,
    NumberRecognitionTwoModule,
    NumberRecognitionThreeModule,
    PlaceValueModule,
    BasicOperationsAdditionModule,
    BasicOperationsSubtractionModule,
    BasicOperationsMultiplicationModule,
    BasicOperationsDivisionModule,
    SharedModule,
  ],
})
export class NumeracyTestModule {}
