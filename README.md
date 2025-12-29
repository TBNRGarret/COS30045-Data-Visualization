# CSIRO Pasture Biomass Prediction using DINOv2

This repository contains the implementation for the CSIRO Pasture Biomass Prediction challenge. The solution leverages **DINOv2 (ViT-Giant)** foundation models and a robust training pipeline optimized for **NVIDIA A100** GPUs.

## 🚀 Key Features
- **Backbone:** Fine-tuned `vit_giant_patch14_reg4_dinov2` (1.1B parameters).
- **High-Resolution Processing:** Training on `756x1512` resolution to capture fine-grained biomass details.
- **Optimization:** - Mixed Precision (AMP) training.
    - Gradient Checkpointing to fit Giant model on GPU.
    - Layer-wise Learning Rate Decay (LLRD) & Freeze Strategy.
- **Validation:** Custom `StratifiedGroupKFold` based on State & Sampling Date to prevent spatio-temporal leakage.

## 📂 Project Structure
- `model.py`: DINOv2 architecture with regression head.
- `train.py`: Training loop with Huber Loss and Freeze/Unfreeze logic.
- `dataset.py`: Data preprocessing (Long-to-Wide conversion) and Albumentations.

