# voiceoverlabs

> Diff-SVC 모델를 사용해 노래의 음성을 원하는 음성로 변환하는 프로젝트

# Demo 

### original
https://github.com/voiceover-labs/voiceoverlabs/assets/110355039/e3b29470-3413-47cb-9e7a-ae5b3f5d9de8

### synthetic (Diff-SVC)
https://github.com/voiceover-labs/voiceoverlabs/assets/110355039/fd0a039f-ed26-4b5c-8a19-55cf9d492d43

### tts demo
https://github.com/voiceover-labs/voiceoverlabs/assets/110355039/a9371105-1f2c-4d8d-99e4-f53b2fbca778




잔나비 말하기 30분, 노래 부르기 데이터 30분으로 Diff-SVC 모델을 통해 학습, 

원본 버전 음원을 잔나비 목소리 모델에 입힌 결과 

## 학습 요구사항

10초 - 15초로 잘려진 음성 데이터 1시간 정도의 분량

### 데이터 정제

### 1. extract voice
- **gaudio studio:** [https://studio.gaudiolab.io/](https://studio.gaudiolab.io/)

### (2. de-noise & de-reverb)


- **Adobe Podcast :** [https://podcast.adobe.com/enhance](https://podcast.adobe.com/enhance)

### 3. [**학습 전 데이터 정리 프로세스**](diff-svc-colab/howtoruncolab.md) 
> mp3 to wav

> audio slice

> zip audio file

## Referece

- [Diff-SVC local guidebook](https://docs.google.com/document/d/1XQlOcv1Xx2BpVeSUyDleb2Th9sYOnG1miFrGZ8uGcsE/edit)
- [The Beginner’s Guide to Diff-SVC](https://diff-svc.gitbook.io/the-beginners-guide-to-diff-svc/) 
- [audio-slicer](https://github.com/flutydeer/audio-slicer)
- [diff-svc code](https://github.com/prophesier/diff-svc.git)
