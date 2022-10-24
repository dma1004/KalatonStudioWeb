<?xml version="1.0" encoding="UTF-8"?>
<TestSuiteEntity>
   <description>Pruebas con casos válidos</description>
   <name>CasosVálidos</name>
   <tag></tag>
   <isRerun>false</isRerun>
   <mailRecipient></mailRecipient>
   <numberOfRerun>3</numberOfRerun>
   <pageLoadTimeout>30</pageLoadTimeout>
   <pageLoadTimeoutDefault>true</pageLoadTimeoutDefault>
   <rerunFailedTestCasesOnly>false</rerunFailedTestCasesOnly>
   <rerunImmediately>true</rerunImmediately>
   <testSuiteGuid>7d676daa-2988-4b12-bd89-9e4b512c72e7</testSuiteGuid>
   <testCaseLink>
      <guid>0d7c3504-7d05-4f69-b48c-7bc95e50c9c2</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Prueba NIF Válido</testCaseId>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
   </testCaseLink>
   <testCaseLink>
      <guid>54a08fbb-81f2-421c-bcc9-04852c7b31d3</guid>
      <isReuseDriver>false</isReuseDriver>
      <isRun>true</isRun>
      <testCaseId>Test Cases/Prueba NIF Válido Data-Driven</testCaseId>
      <testDataLink>
         <combinationType>ONE</combinationType>
         <id>f73e51c0-99d8-42aa-8b3e-a9a6b5b70070</id>
         <iterationEntity>
            <iterationType>ALL</iterationType>
            <value></value>
         </iterationEntity>
         <testDataId>Data Files/Datos Válidos</testDataId>
      </testDataLink>
      <usingDataBindingAtTestSuiteLevel>true</usingDataBindingAtTestSuiteLevel>
      <variableLink>
         <testDataLinkId>f73e51c0-99d8-42aa-8b3e-a9a6b5b70070</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>nif</value>
         <variableId>753e9b73-f2ff-4449-acd1-81fd96b3eab4</variableId>
      </variableLink>
      <variableLink>
         <testDataLinkId>f73e51c0-99d8-42aa-8b3e-a9a6b5b70070</testDataLinkId>
         <type>DATA_COLUMN</type>
         <value>esperado</value>
         <variableId>2920db06-09f4-465e-ac74-bdc2b89cbcdd</variableId>
      </variableLink>
   </testCaseLink>
</TestSuiteEntity>
