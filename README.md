# voiceoverlabs

> Diff-SVC 모델를 사용해 노래의 음성을 원하는 음성로 변환하는 프로젝트

# Demo 

### 주호민 버전 재즈
<audio src="preview/장범준.mp3" controls preload="metadata"></audio>

### 침착맨 버전 재즈 (Diff-SVC)
<audio src="preview/잔나비.mp3" controls preload="metadata"></audio>


### 원본 버전
https://github.com/voiceover-labs/voiceoverlabs/blob/main/preview/%E1%84%8C%E1%85%A1%E1%86%AB%E1%84%82%E1%85%A1%E1%84%87%E1%85%B5.mp3

### 잔나비 버전 (Diff-SVC)
https://github.com/yaiconwithminsu/model/assets/88659167/dc58e9cd-e33d-402a-aa3d-8ae4b8cfb1e2

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