
# 🔥 FireGuard AI: Sistema de Detección de Incendios con Visión Artificial e IoT

> **Proyecto Final - Algoritmos y Estructuras de Datos II** > Universidad Nacional de Ingeniería (UNI) - FIEE

## 📋 Descripción

Este proyecto integra **Inteligencia Artificial (Visión Computacional)** y **Internet de las Cosas (IoT)** para crear un sistema de respuesta automatizada ante incendios. 

El sistema utiliza una cámara conectada a una laptop para procesar video en tiempo real mediante un modelo **YOLOv8** entrenado para detectar fuego. Al identificar una amenaza, el sistema envía una señal vía comunicación serial a un microcontrolador **ESP32**, el cual activa de forma autónoma mecanismos de alerta (visual/sonora) y de supresión (bomba de agua).

## 🚀 Funcionalidades Principales

* **Detección en Tiempo Real:** Uso del modelo YOLOv8 (Ultralytics) entrenado con datasets de Roboflow para identificar llamas con baja latencia (<70ms por frame).
* **Comunicación Serial Híbrida:** Interfaz robusta entre Python (IA) y C++ (Hardware/ESP32).
* **Respuesta Automatizada:**
    * 🚨 Activación de Alarma (Buzzer y LED).
    * 💦 Activación de sistema de bombeo de agua (Actuador de 5V).
* **Filtrado de Falsos Positivos:** Lógica implementada para validar la confianza de la detección antes de activar los actuadores.

## 🛠️ Tecnologías Utilizadas

### Software & IA
* **Lenguaje:** Python 3.12
* **Visión Artificial:** Ultralytics YOLOv8, OpenCV (`cv2`)
* **Dataset:** Roboflow (Imágenes de entrenamiento y validación)
* **Comunicación:** Librería `pyserial`

### Hardware
* **Controlador:** ESP32 Dev Module
* **Sensores:** Cámara Web (Laptop/USB)
* **Actuadores:** * Bomba de agua sumergible (5V)
    * Buzzer activo
    * LED indicador
* **Driver:** Puente H L293D (para control de la bomba)

## ⚙️ Arquitectura del Sistema

1.  **Entrada:** La cámara captura el video del entorno.
2.  **Procesamiento:** El script de Python procesa cada frame con el modelo `.pt` (Best Weights).
3.  **Lógica:** Si la confianza (`conf`) > umbral establecido:
    * Python envía el carácter `'1'` por el Puerto Serial (COM).
4.  **Actuación:** El ESP32 lee el puerto Serial:
    * Si recibe `'1'`: Enciende LED, Buzzer y Bomba.
    * Si recibe `'0'`: Apaga todo (estado seguro).

## 🔧 Instalación y Uso

### 1. Clonar el repositorio
```bash
git clone [https://github.com/Ismaelrojas0112/Detector-de-incendios-.git](https://github.com/Ismaelrojas0112/Detector-de-incendios-.git)
cd Detector-de-incendios-
